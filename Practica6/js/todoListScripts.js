const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');
const clearAll = document.getElementById('clearAll');

function createIcon(type) 
{
    if (type === 'delete')
        return ` <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14 11v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
    if (type === 'edit')
        return ` <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21v-3.6L14.6 6.8l3.6 3.6L7.2 21H3z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.4 6.6l-1-1a1.6 1.6 0 0 0-2.2 0l-1 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    return '';
}

function ensureToastContainer() 
{
    let c = document.getElementById('toastContainer');
    if (!c) 
    {
        c = document.createElement('div');
        c.id = 'toastContainer';
        c.setAttribute('aria-live','polite');
        document.body.appendChild(c);
    }
    return c;
}

function showToast(type, message, duration = 3500) 
{
    const container = ensureToastContainer();
    const toast = document.createElement('div');
    toast.className = 'toast ' + (type || 'info');

    const icon = document.createElement('div'); icon.className = 'toast-icon';
    if (type === 'error') 
    {
        icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4"/><path d="M9.5 9.5l5 5M14.5 9.5l-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
    } 
    else 
    {
        icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4"/><path d="M8.5 12.5l2 2 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }

    const content = document.createElement('div'); content.className = 'toast-content';
    const title = document.createElement('div'); title.className = 'toast-title'; title.textContent = message;
    const closeBtn = document.createElement('button'); closeBtn.className = 'toast-close'; closeBtn.innerHTML = '✕'; closeBtn.setAttribute('aria-label','Cerrar');

    const progress = document.createElement('div'); progress.className = 'toast-progress';
    const progressBar = document.createElement('div'); progressBar.className = 'toast-progress-bar';
    progress.appendChild(progressBar);
    content.appendChild(title);
    toast.appendChild(icon);
    toast.appendChild(content);
    toast.appendChild(closeBtn);
    toast.appendChild(progress);

    container.appendChild(toast);

    requestAnimationFrame(()=>{ progressBar.style.width = '100%'; progressBar.style.transition = `width ${duration}ms linear`; });

    let removed = false;
    const remove = ()=>{ if(removed) return; removed = true; toast.classList.add('toast-hide'); setTimeout(()=>{ try{ container.removeChild(toast);}catch(e){} },300); };

    const timeoutId = setTimeout(remove, duration);
    closeBtn.addEventListener('click', ()=>{ clearTimeout(timeoutId); remove(); });
}

function showAlert(msg){ showToast('success', msg); }

function showConfirm(message) 
{
    return new Promise((resolve)=>
    {
        const overlay = document.createElement('div'); overlay.className = 'confirm-overlay';
        const dialog = document.createElement('div'); dialog.className = 'confirm-dialog';
        const msg = document.createElement('div'); msg.className = 'confirm-message'; msg.textContent = message;
        const actions = document.createElement('div'); actions.className = 'confirm-actions';
        const btnCancel = document.createElement('button'); btnCancel.className = 'confirm-btn cancel'; btnCancel.textContent = 'Cancelar';
        const btnOk = document.createElement('button'); btnOk.className = 'confirm-btn ok'; btnOk.textContent = 'Aceptar';

        actions.appendChild(btnCancel); actions.appendChild(btnOk);
        dialog.appendChild(msg); dialog.appendChild(actions);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);

        btnOk.focus();
        function clean(up) { try{ document.body.removeChild(overlay);}catch(e){} resolve(up); }
        btnCancel.addEventListener('click', ()=> clean(false));
        btnOk.addEventListener('click', ()=> clean(true));
        function onKey(e){ if(e.key==='Escape'){ clean(false); } }
        document.addEventListener('keydown', onKey);
        const origClean = clean;
        clean = (val)=>{ document.removeEventListener('keydown', onKey); origClean(val); };
    });
}

function addTask(text, checked = false) 
{
    const li = document.createElement('li');

    const left = document.createElement('div');
    left.className = 'item-left';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = checked;
    const span = document.createElement('span');
    span.className = 'item-text';
    span.textContent = text;
    if (checked) span.classList.add('completed');

    cb.addEventListener('change', () => 
    {
        span.classList.toggle('completed', cb.checked);
    });

    left.appendChild(cb);
    left.appendChild(span);

    const actions = document.createElement('div');
    actions.className = 'item-actions';
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-icon edit';
    editBtn.title = 'Editar';
    editBtn.innerHTML = createIcon('edit');
    const delBtn = document.createElement('button');
    delBtn.className = 'btn-icon delete';
    delBtn.title = 'Eliminar';
    delBtn.innerHTML = createIcon('delete');

    editBtn.addEventListener('click', () => 
    {
        const value = span.textContent;
        const inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = value;
        inputEdit.style.padding = '6px';
        inputEdit.style.borderRadius = '4px';
        left.replaceChild(inputEdit, span);
        inputEdit.focus();
        inputEdit.addEventListener('blur', () => 
        {
            const newVal = inputEdit.value.trim();
            if (newVal === '') 
            {
                showToast('error', 'El texto no puede quedar vacío.');
                inputEdit.focus();
                return;
            }
            span.textContent = newVal;
            left.replaceChild(span, inputEdit);
            showToast('success', 'Tarea editada');
        });
        inputEdit.addEventListener('keydown', (e) => 
        {
            if (e.key === 'Enter') 
            {
                inputEdit.blur();
            }
        });
    });

    delBtn.addEventListener('click', () => 
    {
        list.removeChild(li);
        showToast('success', 'Tarea eliminada');
    });

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    li.appendChild(left);
    li.appendChild(actions);

    list.appendChild(li);
}

addBtn.addEventListener('click', () => 
{
    const value = input.value.trim();
    if (value === '') 
    {
        showToast('error', 'No puedes agregar una tarea vacía.');
        input.focus();
        return;
    }
    addTask(value);
    showToast('success', 'Tarea agregada');
    input.value = '';
    input.focus();
});

input.addEventListener('keydown', (e) => 
{
    if (e.key === 'Enter') 
    {
        addBtn.click();
    }
});

    clearAll.addEventListener('click', async () => 
    {
        if (list.children.length === 0) 
        {
            showToast('error', 'La lista ya está vacía.');
            return;
        }
        const ok = await showConfirm('¿Eliminar todas las tareas?');
        if (ok) 
        {
            list.innerHTML = '';
            showToast('success', 'Lista limpiada');
        }
    });

addTask('Permitir agregar elementos a la lista de forma dinámica', true);
addTask('Permitir eliminar un elemento de la lista', true);
addTask('Permitir editar el elemento', true);
addTask('Usar checkbox para marcar/desmarcar los pendientes terminados', true);
addTask('Usar íconos', true);
addTask('Sombrear el elemento (hover) al pasar el mouse encima de el', true);
addTask('Añadir un botón que permita eliminar todos los elementos de la lista', true);
addTask('Validar que el campo de texto, al presionar el botón ‘Agregar’, no esté vacío. En caso de estar vacío al presionar el botón, mostrar una alerta', true);
addTask('Mostrar un mensaje (alerta) al agregar o eliminar un elemento de la lista', true);
addTask(' Óptima visualización en distintos dispositivos (responsive)', true);