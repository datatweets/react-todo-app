import './App.css'
import { useTodos } from './hooks/useTodos'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoFilter } from './components/TodoFilter/TodoFilter'
import { TodoItem } from './components/TodoItem/TodoItem'

function App() {
  const { filteredTodos, filter, remainingCount, addTodo, toggleTodo, deleteTodo, setFilter } = useTodos()

  return (
    <div className="app-wrapper">
      <main className="card">
        <header className="card-header">
          <h1 className="title">Todo</h1>
          <span className="count">
            {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
          </span>
        </header>

        <TodoForm onAdd={addTodo} />
        <TodoFilter current={filter} onChange={setFilter} />

        <ul className="todo-list" aria-label="Todo list">
          {filteredTodos.length === 0 ? (
            <li className="empty">Nothing here yet!</li>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </ul>
      </main>
    </div>
  )
}

export default App
