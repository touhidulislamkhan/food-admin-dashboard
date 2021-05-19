import React, { useState } from 'react';
import './DishTable.css';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { deleteDish } from "../../redux/actionCreators";
import DishForm from './DishForm';

const DishTable = () => {
    const dishes = useSelector(state => state.dishes);
    const dispatch = useDispatch();
    // console.log(dishes);

    const [isModal, setIsModal] = useState(false);

    const handleDelete = (dish) => {
        dispatch(deleteDish(dish));
    }

    const handleEdit = (dish) => {
        console.log(dish);
    }

    return (
        <>
            <TableContainer className='table-container' component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dishes</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dishes.map((dish) => (
                            <TableRow key={dish.name}>
                                <TableCell component="th" scope="row">
                                    {dish.name}
                                </TableCell>
                                <TableCell align="right">{dish.calories}</TableCell>
                                <TableCell align="right">{dish.protein}</TableCell>
                                <TableCell align="right">{dish.carbs}</TableCell>
                                <TableCell align="right">{dish.fat}</TableCell>
                                <TableCell align="right">
                                    <button className='btn btn-info btn-sm' onClick={() => handleEdit(dish)}>Edit</button>
                                    <button className='btn btn-danger btn-sm ml-2' onClick={() => handleDelete(dish)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default DishTable;

