import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {findCategories} from '../../actions/categories';
import {categories} from '../../items/categories';
import './styles/categories.css';



export const ShowCategories = () => {



    const dispatch = useDispatch();

    const handleListFilms = (data) => {
        dispatch(findCategories(data))
    }

    return (
        <div>
            <div>
                <h2 className="p-title">Categorias</h2>
            </div>
            <div  className="flex-container">
                {categories.map((e) =>
                    <div key={e.id} className="card">
                        <img src={e.icon} alt="poster" className="img-porter"/>
                        <div className="buttons">
                            <Link to={`/category/${e.name}`}>
                                <button className="buttons" onClick={() => {
                                    handleListFilms(e)
                                }}>{e.name}</button>
                            </Link>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
