export const getNewsTemplate = (data = []) => {
    const items = data.map( (item, index) => {
        
        return `
            <li class="news__item list__item" id="news-${item.id}">
                <div class="news__card card">
                    <figure class="card__image">
                        <img class="news__image" src="/assets/img/${item.img}" alt="${item.title}" />
                    </figure>
                    <div class="card__header card__header_padding">
                        <span class="card__date">
                            ${item.date}
                        </span>
                        <h3 class="card__title card__title_overflow_hidden">
                            ${item.title}
                        </h3>
                    </div>
                    <div class="card__body card__body_padding">
                        <p class="card__description news__description">
                            ${item.description}
                        </p>
                    </div>
                </div>
            </li>
        `
    })

    return `
        <ul class="news__list list">
            ${items.join('')}
            
            ${items.join('')}
        </ul>
    `
}