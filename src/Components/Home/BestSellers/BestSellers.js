import React, { Component } from 'react';
import stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../Utils/Misc';

class BestSeller extends Component {
  state = {};

  render() {
    return (
      <div
        className="best_sellers"
        style={{ background: `#ffffff url(${stripes}` }}
      >
        <div className="containers">
          <div className="best_sellers_wrapper">
            <div className="home_card_wrapper">Card</div>
            <div className="home_text_wrapper">
              <div>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="#ffffff"
                  custom={{
                    display: 'inline-block',
                    marginBottom: '20px',
                  }}
                >
                  Meet
                </Tag>
              </div>
              <div>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="#ffffff"
                  custom={{
                    display: 'inline-block',
                    marginBottom: '20px',
                  }}
                >
                  The
                </Tag>
              </div>
              <div>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="#ffffff"
                  custom={{
                    display: 'inline-block',
                    marginBottom: '20px',
                  }}
                >
                  Bests
                </Tag>
              </div>
              <div>
                <Tag
                  bck="#ffffff"
                  size="27px"
                  color="#0e1731"
                  link={true}
                  linkto="/the_team"
                  custom={{
                    display: 'inline-block',
                    marginBottom: '27px',
                    border: '1px solid #0e1731',
                  }}
                >
                  See more items
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BestSeller;
