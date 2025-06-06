"use client"

import { useState, useEffect } from "react"
import { Plus, Clock, Check, Edit2, Trash2, Moon, Sun, Zap, Target, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  dueDate?: string
  dueTime?: string
  priority: "low" | "medium" | "high"
  category: "work" | "personal" | "health" | "learning"
  createdAt: Date
}

type FilterType = "all" | "today" | "upcoming" | "completed"

export default function ModernTodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>("all")
  const [darkMode, setDarkMode] = useState(false)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    priority: "medium" as "low" | "medium" | "high",
    category: "personal" as "work" | "personal" | "health" | "learning",
  })

  // Load data on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("modern-todo-tasks")
    const savedDarkMode = localStorage.getItem("modern-todo-dark-mode")

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  // Save tasks
  useEffect(() => {
    localStorage.setItem("modern-todo-tasks", JSON.stringify(tasks))
  }, [tasks])

  // Handle dark mode
  useEffect(() => {
    localStorage.setItem("modern-todo-dark-mode", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const addTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title.trim(),
        description: newTask.description.trim() || undefined,
        completed: false,
        dueDate: newTask.dueDate || undefined,
        dueTime: newTask.dueTime || undefined,
        priority: newTask.priority,
        category: newTask.category,
        createdAt: new Date(),
      }
      setTasks([task, ...tasks])
      setNewTask({ title: "", description: "", dueDate: "", dueTime: "", priority: "medium", category: "personal" })
      setShowAddDialog(false)
    }
  }

  const updateTask = () => {
    if (editingTask && newTask.title.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                title: newTask.title.trim(),
                description: newTask.description.trim() || undefined,
                dueDate: newTask.dueDate || undefined,
                dueTime: newTask.dueTime || undefined,
                priority: newTask.priority,
                category: newTask.category,
              }
            : task,
        ),
      )
      setEditingTask(null)
      setNewTask({ title: "", description: "", dueDate: "", dueTime: "", priority: "medium", category: "personal" })
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const startEdit = (task: Task) => {
    setEditingTask(task)
    setNewTask({
      title: task.title,
      description: task.description || "",
      dueDate: task.dueDate || "",
      dueTime: task.dueTime || "",
      priority: task.priority,
      category: task.category,
    })
    setShowAddDialog(true)
  }

  const isToday = (dateString?: string) => {
    if (!dateString) return false
    const today = new Date().toISOString().split("T")[0]
    return dateString === today
  }

  const isUpcoming = (dateString?: string) => {
    if (!dateString) return false
    const today = new Date().toISOString().split("T")[0]
    return dateString > today
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed
    if (filter === "today") return !task.completed && isToday(task.dueDate)
    if (filter === "upcoming") return !task.completed && isUpcoming(task.dueDate)
    return true
  })

  const getPriorityGradient = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-red-400 to-pink-500"
      case "medium":
        return "from-amber-400 to-orange-500"
      case "low":
        return "from-emerald-400 to-teal-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "work":
        return <Target className="h-4 w-4" />
      case "personal":
        return <Star className="h-4 w-4" />
      case "health":
        return <Zap className="h-4 w-4" />
      case "learning":
        return <Calendar className="h-4 w-4" />
      default:
        return <Star className="h-4 w-4" />
    }
  }

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "work":
        return "from-blue-500 to-indigo-600"
      case "personal":
        return "from-purple-500 to-pink-600"
      case "health":
        return "from-green-500 to-emerald-600"
      case "learning":
        return "from-orange-500 to-red-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const formatDateTime = (date?: string, time?: string) => {
    if (!date) return null
    const dateObj = new Date(date)
    const dateStr = dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
    return time ? `${dateStr} at ${time}` : dateStr
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const todayCount = tasks.filter((task) => !task.completed && isToday(task.dueDate)).length

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "dark bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
            darkMode ? "bg-purple-500" : "bg-blue-400"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse delay-1000 ${
            darkMode ? "bg-pink-500" : "bg-indigo-400"
          }`}
        ></div>
      </div>

      {/* Glassmorphism Header */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10">
        <div className="flex items-center justify-between p-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              TaskFlow
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {tasks.length} tasks • {completedCount} completed
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Filter Pills */}
      <div className="px-6 py-4">
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {[
            { key: "all", label: "All", count: tasks.length, gradient: "from-gray-500 to-gray-600" },
            { key: "today", label: "Today", count: todayCount, gradient: "from-blue-500 to-indigo-600" },
            {
              key: "upcoming",
              label: "Upcoming",
              count: tasks.filter((t) => !t.completed && isUpcoming(t.dueDate)).length,
              gradient: "from-purple-500 to-pink-600",
            },
            { key: "completed", label: "Done", count: completedCount, gradient: "from-green-500 to-emerald-600" },
          ].map(({ key, label, count, gradient }) => (
            <button
              key={key}
              onClick={() => setFilter(key as FilterType)}
              className={`flex-shrink-0 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                filter === key
                  ? `bg-gradient-to-r ${gradient} text-white shadow-lg shadow-${gradient.split("-")[1]}-500/25`
                  : "backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30"
              }`}
            >
              {label}{" "}
              {count > 0 && (
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    filter === key ? "bg-white/20" : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div className="px-6 pb-32">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/25">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {filter === "all" ? "Ready to be productive?" : `No ${filter} tasks`}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {filter === "all" ? "Create your first task and start achieving your goals!" : "You're all caught up! 🎉"}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTasks.map((task, index) => (
              <div
                key={task.id}
                className={`group relative backdrop-blur-xl bg-white/40 dark:bg-black/20 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                  task.completed ? "opacity-60" : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Priority Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getPriorityGradient(task.priority)} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                <div className="relative p-6">
                  <div className="flex items-start space-x-4">
                    {/* Custom Checkbox */}
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`mt-1 w-7 h-7 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        task.completed
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 border-green-400 text-white shadow-lg shadow-green-500/25"
                          : "border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-400 backdrop-blur-md bg-white/20 dark:bg-black/20"
                      }`}
                    >
                      {task.completed && <Check className="h-4 w-4" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-semibold leading-tight transition-all duration-300 ${
                              task.completed
                                ? "line-through text-gray-500 dark:text-gray-400"
                                : "text-gray-900 dark:text-white"
                            }`}
                          >
                            {task.title}
                          </h3>
                          {task.description && (
                            <p
                              className={`text-sm mt-2 leading-relaxed ${
                                task.completed
                                  ? "line-through text-gray-400 dark:text-gray-500"
                                  : "text-gray-600 dark:text-gray-300"
                              }`}
                            >
                              {task.description}
                            </p>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => startEdit(task)}
                            className="p-2 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="p-2 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Task Meta Info */}
                      <div className="flex items-center space-x-3 flex-wrap gap-2">
                        {/* Category Badge */}
                        <div
                          className={`flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryGradient(task.category)} text-white text-xs font-medium shadow-lg`}
                        >
                          {getCategoryIcon(task.category)}
                          <span className="capitalize">{task.category}</span>
                        </div>

                        {/* Priority Badge */}
                        <div
                          className={`px-3 py-1 rounded-full bg-gradient-to-r ${getPriorityGradient(task.priority)} text-white text-xs font-medium shadow-lg`}
                        >
                          {task.priority.toUpperCase()}
                        </div>

                        {/* Date/Time Info */}
                        {(task.dueDate || task.dueTime) && (
                          <div className="flex items-center space-x-1 px-3 py-1 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 text-xs text-gray-600 dark:text-gray-300">
                            <Clock className="h-3 w-3" />
                            <span>{formatDateTime(task.dueDate, task.dueTime)}</span>
                          </div>
                        )}

                        {/* Today Badge */}
                        {isToday(task.dueDate) && !task.completed && (
                          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium shadow-lg animate-pulse">
                            TODAY
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modern Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => {
            setEditingTask(null)
            setNewTask({
              title: "",
              description: "",
              dueDate: "",
              dueTime: "",
              priority: "medium",
              category: "personal",
            })
            setShowAddDialog(true)
          }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl shadow-indigo-500/25 hover:shadow-3xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <Plus className="h-7 w-7 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Modern Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="mx-4 rounded-3xl backdrop-blur-xl bg-white/90 dark:bg-black/80 border border-white/20 dark:border-white/10 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {editingTask ? "Edit Task" : "Create New Task"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Task Title</label>
              <Input
                placeholder="What needs to be done?"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="text-lg rounded-2xl border-0 backdrop-blur-md bg-white/50 dark:bg-black/30 focus:bg-white/70 dark:focus:bg-black/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Description</label>
              <Textarea
                placeholder="Add more details..."
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                rows={3}
                className="resize-none rounded-2xl border-0 backdrop-blur-md bg-white/50 dark:bg-black/30 focus:bg-white/70 dark:focus:bg-black/50 transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Due Date</label>
                <Input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  className="rounded-2xl border-0 backdrop-blur-md bg-white/50 dark:bg-black/30 focus:bg-white/70 dark:focus:bg-black/50 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Due Time</label>
                <Input
                  type="time"
                  value={newTask.dueTime}
                  onChange={(e) => setNewTask({ ...newTask, dueTime: e.target.value })}
                  className="rounded-2xl border-0 backdrop-blur-md bg-white/50 dark:bg-black/30 focus:bg-white/70 dark:focus:bg-black/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Priority</label>
                <Select
                  value={newTask.priority}
                  onValueChange={(value: "low" | "medium" | "high") => setNewTask({ ...newTask, priority: value })}
                >
                  <SelectTrigger className="rounded-2xl border-0 backdrop-blur-md bg-white/50 dark:bg-black/30 focus:bg-white/70 dark:focus:bg-black/50 transition-all duration-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-black/80 border border-white/20 dark:border-white/10">
                    <SelectItem value="low">🟢 Low Priority</SelectItem>
                    <SelectItem value="medium">🟡 Medium Priority</SelectItem>
                    <SelectItem value="high">🔴 High Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Category</label>
                <Select
                  value={newTask.category}
                  onValueChange={(value: "work" | "personal" | "health" | "learning") =>
                    setNewTask({ ...newTask, category: value })
                  }
                >
                  <SelectTrigger className="rounded-2xl border-0 backdrop-blur-md bg-white/50 dark:bg-black/30 focus:bg-white/70 dark:focus:bg-black/50 transition-all duration-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-black/80 border border-white/20 dark:border-white/10">
                    <SelectItem value="work">🎯 Work</SelectItem>
                    <SelectItem value="personal">⭐ Personal</SelectItem>
                    <SelectItem value="health">⚡ Health</SelectItem>
                    <SelectItem value="learning">📚 Learning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button
                onClick={() => setShowAddDialog(false)}
                variant="outline"
                className="flex-1 rounded-2xl border-0 backdrop-blur-md bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300"
              >
                Cancel
              </Button>
              <Button
                onClick={editingTask ? updateTask : addTask}
                disabled={!newTask.title.trim()}
                className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
              >
                {editingTask ? "Update Task" : "Create Task"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
