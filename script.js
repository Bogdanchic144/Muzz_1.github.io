document.addEventListener('DOMContentLoaded', () => {
    const songs = document.querySelector('.playlist-songs');
    const emptyMessage = document.querySelector('.content_main-text_bibl p');

    // Изначально убираем надпись, если окно плейлиста видимо
    if (songs && !songs.classList.contains('hidden')) {
        emptyMessage.style.display = 'none'; // Скрываем надпись
    }
});

function togglePlaylist() {
    const songs = document.querySelector('.playlist-songs');
    const arrow = document.querySelector('.toggle-arrow');
    const emptyMessage = document.querySelector('.content_main-text_bibl p');

    // Переключение видимости плейлиста
    songs.classList.toggle('hidden');
    
    // Обновляем текст стрелки
    arrow.textContent = songs.classList.contains('hidden') ? '▼' : '▲'; 

    // Показываем или скрываем надпись в зависимости от видимости плейлиста
    if (songs.classList.contains('hidden')) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none'; // Убираем надпись, когда окно плейлиста открыто
    }
}