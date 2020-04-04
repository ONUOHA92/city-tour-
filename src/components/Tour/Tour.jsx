import React, { Component, } from 'react';
import  './tour.scss'

class Tour extends Component {
    state = {
        ShowInfo: false
    }

    handleinfo = () => {
        this.setState({
            ShowInfo : !this.state.ShowInfo
        })
    }

    render() {
        const { id, city, img, name, info } = this.props.tour
        const { removeTour } = this.props
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="this is tour" />
                    <span className="close-btn" onClick={()=>removeTour(id)}>
                    <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="info-tour">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "}
                        <span className="info-span" onClick={this.handleinfo}>
                        <i className="fas fa-caret-square-down" />
                        </span>
                        {
                            this.state.ShowInfo && <p>{info}</p>
                        }
                        
                    </h5>
                </div>


            </article>

        );
    }
}

export default Tour;