import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

export default function TodoList({ todos, onDelete }) {
  return (
    <Grid>
      {todos.map(todo => (
        <GridItem key={todo.id}>
          <TodoListItem todo={todo} onDelete={onDelete} />
        </GridItem>
      ))}
    </Grid>
  );
}
