import React, { useState } from 'react'
import './DishForm.css';
import { addDish } from "../../redux/actionCreators";
import { useDispatch } from 'react-redux';

const DishForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    // console.log(protein);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dish = {
            name: name,
            protein: protein,
            carbs: carbs,
            fat: fat,
        }

        console.log(dish);

        dispatch(addDish(dish));


        setName('');
        setProtein('');
        setCarbs('');
        setFat('');
    }
    return (
        <div className='form-container'>
            <h3>Add A New Dish</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Dish Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label className="form-label">Protein (g)</label>
                    <input type="number" className="form-control" value={protein} onChange={(e) => setProtein(e.target.value)} />
                    <label className="form-label">Carbs (g)</label>
                    <input type="number" className="form-control" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
                    <label className="form-label">Fat (g)</label>
                    <input type="number" className="form-control" value={fat} onChange={(e) => setFat(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default DishForm;
