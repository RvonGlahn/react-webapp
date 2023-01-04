import React from 'react';
import './PageContent.css';
import { Button } from './Buttons/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PageContent({ lightBg, lightText, lightTextDesc, topLine, headline, description, buttonLabel, img, img_credit, linkURL, alt, imgStart }) {
    return (
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                <div
                    className="row home__hero-row"
                    style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
                    }}
                >
                    <div className="coll">
                        <div className="home__hero-text-wrapper">
                            <div className={!lightBg ? 'top-line' : 'top-line topdark'}>{topLine}</div>

                            <h1 className={lightText ? 'head' : 'dhead'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <Link to={linkURL} target={linkURL.length >= 15 ? '_blank' : '_self'} aria-label="Github">
                                <Button buttonSize="btn--wide" buttonColor="blue">
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="coll">
                        <div className="home__hero-img-wrapper">
                            <figure>
                                <img src={img} alt={alt} className="home__hero-img" />
                                <figcaption
                                    className={lightText ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}
                                    dangerouslySetInnerHTML={{
                                        __html: img_credit,
                                    }}
                                ></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

PageContent.propTypes = {
    lightBg: PropTypes.bool.isRequired,
    lightText: PropTypes.bool.isRequired,
    lightTextDesc: PropTypes.bool.isRequired,
    topLine: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    img_credit: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    imgStart: PropTypes.string.isRequired,
};

export default PageContent;
