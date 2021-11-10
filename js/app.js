document.addEventListener('DOMContentLoaded', init)

function init() {
    const buttonToggleItems = document.getElementsByClassName('btn--toggle-items')
    if (buttonToggleItems.length === 0) {
        throw new Error('Кнопка не найдена')
    }

    const listItemContainer = document.getElementsByClassName('list')

    buttonToggleItems[0].addEventListener('click', (event) => handleToggleItemsBtnClick(listItemContainer[0], event))
}

function handleToggleItemsBtnClick(listItemContainer, pointerEvent) {
    const classForHiddenItem = 'list--all-hidden-visible'

    if (pointerEvent.currentTarget.innerText === 'Show items') {
        pointerEvent.currentTarget.innerText = 'Hide items'
        listItemContainer.classList.add(classForHiddenItem)

        return
    }

    pointerEvent.currentTarget.innerText = 'Show items'
    listItemContainer.classList.remove(classForHiddenItem)
}