import  React from 'react';
import  Footer from './Footer';
import  AddTodo from '../containers/AddTodo';
import  VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <dir>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </dir>
);

export default App;
