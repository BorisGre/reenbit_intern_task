import React from 'react';
import {useSelector} from 'react-redux';

const CategoriesSelector = ({defaultValue = '', id = 'categories', onChangeHandler}) => {
    
    const notesCategories = useSelector(state => state.notesCategories)//bool
    return (
            <select id={id} name="category" className="categorySelector" onChange={(e) => onChangeHandler(e, 'category')}>
                {defaultValue ? '' : <option selected value={'Choose cat'}>Choose cat</option>}
                {notesCategories.map((cat) => {
                    return (cat === defaultValue ? <option value={cat} selected key={cat}>{cat}</option>
                                                 : <option value={cat} key={cat}>{cat}</option>
                            )
                })}
            </select>
    )
} 
export default CategoriesSelector