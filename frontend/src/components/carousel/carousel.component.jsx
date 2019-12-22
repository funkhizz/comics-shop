import React from 'react'
import './carousel.styles.scss'
import ImageSlide from '../imageslide/imageslide.component'
import Arrow from '../arrow/arrow.component';

class Carousel extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        currentImageIndex: 0,
        imgUrls: []
      };
      this.nextSlide = this.nextSlide.bind(this);
      this.previousSlide = this.previousSlide.bind(this);
      this.renderCarousel = this.renderCarousel.bind(this);
    }

    previousSlide () {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
          currentImageIndex: index
        });
      }

    nextSlide () {
      const lastIndex = this.state.imgUrls.length - 1;
      const { currentImageIndex } = this.state;
      const shouldResetIndex = currentImageIndex === lastIndex;
      const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

      this.setState({
        currentImageIndex: index
      });
    }
    renderCarousel () {
      const { photo_main, photo_1, photo_2, photo_3 } = this.props.comic;
      let imgUrl = []
      if (photo_main!==null) {
        imgUrl = [...imgUrl, photo_main]
      }
      if (photo_1!==null) {
        imgUrl = [...imgUrl, photo_1]
      }
      if (photo_2!==null) {
        imgUrl = [...imgUrl, photo_2]
      }
      if (photo_3!==null) {
        imgUrl = [...imgUrl, photo_3]
      }
      this.setState({imgUrls: imgUrl})
    }
    componentDidMount() {
      this.renderCarousel()
    }
    render() {


        return (
            <div className="carousel">
              { this.state.imgUrls.length > 1 ?
                <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />
                :
                null
              }

                <ImageSlide url={ this.state.imgUrls[this.state.currentImageIndex] } />
              { this.state.imgUrls.length > 1 ?
                <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
                :
                null
              }

            </div>
        )
    }
}

export default Carousel
