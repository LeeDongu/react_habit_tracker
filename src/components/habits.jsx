import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    }

    handleReset = () => {
        const habits = this.state.habits.map(habit => {
            habit.count = 0;
            return habit;
        });
        this.setState({habits});
    };

    render() {
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {
                        this.props.habits.map(habit => (
                            <Habit 
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}/>
                                // 위에 멤버변수 정의하고 아래에 이런식으로 쓰기 싫다면
                                // onDelete={(habit) => {this.props.handleDelete(habit)}} 이런식으로 한방에 가능                               
                    ))}
                </ul>
                <button className='habits-reset' onClick = {this.props.onReset}>Reset</button>

            </>
        );
    }
}

export default Habits;