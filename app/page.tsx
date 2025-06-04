import TodoApp from "@/components/todo-app"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-950 dark:to-teal-950 p-4 md:p-8">
      <TodoApp />
    </main>
  )
}
