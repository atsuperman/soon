document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const colorBlocks = document.createElement('div');
    colorBlocks.className = 'color-blocks';

    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.className = 'color-block';
        colorBlocks.appendChild(block);
    }

    container.appendChild(colorBlocks);
});
