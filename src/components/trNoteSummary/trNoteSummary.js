import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faRandom, faLightbulb, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import categoryToIcon from '../../helpers/categoriesToIconsHelper';

const TrNotesSummaryTable = ({item}) => {
    const iconsObj = {faTasks, faRandom, faLightbulb, faQuoteRight}

    return (
            <ul className="noteRow"> 
                <li name="summaryIcon">
                    <FontAwesomeIcon icon={categoryToIcon(item.category, iconsObj)} size="2x" />
                </li>
                <li name="summaryCategory" className="noteName">{item.category}</li>
                <li name="summaryActive">{item.active}</li>
                <li name="summaryArchived">{item.archived}</li>
            </ul>)
}                        
export default TrNotesSummaryTable