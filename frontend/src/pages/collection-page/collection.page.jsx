import React from 'react'
import './collection.styles.scss'
import CatChoice from '../../components/cat-choice/cat-choice.component'
import dccomics from '../../static/img/dc_comics.jpeg'
import marvelcomics from '../../static/img/marvel_comics.jpeg'
import picaccessories from '../../static/img/accessories.jpg'

const Collection = ({history, match}) => {
    return (
        <div className="category">
            <div className="category__content">
                <CatChoice linkUrl={'/marvel'} text={'Marvel Comics'} imgUrl={marvelcomics}/>

                <CatChoice linkUrl={'/dc'} text={'DC Comics'} imgUrl={dccomics}/>

                <CatChoice linkUrl={'/accessories'} text={'Accessories'} imgUrl={picaccessories} />
            </div>

        </div>
    )
}

export default Collection