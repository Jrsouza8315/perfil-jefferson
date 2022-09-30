const acordionTriggers = document.querySelectorAll('.acordion .trigger')

acordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordion = trigger.parentElement
        const isOpen = acordion.classList.contains('open')

        if (isOpen) {
            acordion.classList.remove('open') //= Array.of(acordion.classList).filter(className => className !== 'open')
        } else {
            acordion.classList.add('open')
        }
     })
})