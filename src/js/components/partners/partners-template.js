export const getPartnersTemplate = (data = []) => {
    const items = data.map((item, index) => {

        return `
            <li class="partners__item slider-pt__item">
                <div class="partners__card card">
                    <a class="partners__image" href="${item.link}">

                        <img src="/assets/png/${item.img}" alt="${item.name}">
                    </a>
                </div>
            </li>
        `
    })


    return `
        <ul class="partners__list slider-pt">

            ${items.join('')}

        </ul>
    `
}