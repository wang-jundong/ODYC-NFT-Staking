import { svgs } from "../../../assets/svgs";
import { link_opensea } from "../../../data/links";

const ShopStatistics = () => {
    return (
        <div>
            <div className="ShopStatistics_Wrapper">
                <div className="ShopStatistics_GridContainer">
                    <div className="ShopStatistics_Item">
                        <img
                            src="/images/balance.png"
                            alt="baoxiang"
                            draggable="false"
                        />
                        <div>
                            <h2></h2>
                            <h3>Shop with grapes</h3>
                        </div>
                    </div>
                    <a
                        href={link_opensea}
                        type="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Buy Ducks
                    </a>
                    <div className="ShopStatistics_BtnContainer">
                        <button className="ShopStatistics_LiveBtn false">
                            Live
                        </button>
                        <button className="ShopStatistics_EndedBtn ShopStatistics_Selected">
                            Ended
                        </button>
                    </div>
                </div>
            </div>
            <div className="shop-content">
                <div className="ShopCard_Wrapper">
                    <h1>Coming Soon...</h1>
                    <img alt="" src="/images/coming.gif" />
                </div>
            </div>
        </div>
    );
};

export default ShopStatistics;
