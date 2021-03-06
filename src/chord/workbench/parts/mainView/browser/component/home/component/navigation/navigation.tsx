'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { IStateGlobal } from 'chord/workbench/api/common/state/stateGlobal';
import { IShowRecommendViewAct } from 'chord/workbench/api/common/action/home/recommend';

import { changeView } from 'chord/workbench/parts/mainView/browser/action/home/nagivation';
import { handleShowRecommendView } from 'chord/workbench/parts/mainView/browser/action/home/recommend';


interface INagivationMenuViewProps {
    view: string;
    handleShowRecommendView: () => Promise<IShowRecommendViewAct>;
}


// over, recommend, newrelease, ranking, entries, styles
function NagivationMenuView(props: INagivationMenuViewProps) {
    let view = props.view;
    return (
        <nav className='search-nav-container'>
            <ul className='search-nav-ul'>
                <li className='search-nav-li'>
                    <div className={`search-nav-item link-subtle cursor-pointer ${view == 'recommendView' ? 'search-nav-item__active' : ''}`}
                        onClick={() => props.handleShowRecommendView()}>
                        RECOMMEND</div>
                </li>
            </ul>
        </nav>
    );
}


function mapStateToProps(state: IStateGlobal) {
    return {
        view: state.mainView.homeView.view,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeView: (view) => dispatch(changeView(view)),
        handleShowRecommendView: () => handleShowRecommendView().then(act => dispatch(act)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NagivationMenuView);
