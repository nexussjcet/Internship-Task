"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, Plus, Trash2, Check, X, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"
import { TimePickerDemo } from "@/components/time-picker"

interface Task {
  id: string
  title: string
  completed: boolean
  dueDate: Date | null
  category: string
}

const CATEGORIES = [
  { id: "work", name: "Work", color: "bg-blue-500", lightColor: "bg-blue-100", darkColor: "bg-blue-900" },
  { id: "personal", name: "Personal", color: "bg-green-500", lightColor: "bg-green-100", darkColor: "bg-green-900" },
  { id: "health", name: "Health", color: "bg-red-500", lightColor: "bg-red-100", darkColor: "bg-red-900" },
  { id: "learning", name: "Learning", color: "bg-purple-500", lightColor: "bg-purple-100", darkColor: "bg-purple-900" },
  { id: "shopping", name: "Shopping", color: "bg-orange-500", lightColor: "bg-orange-100", darkColor: "bg-orange-900" },
  { id: "finance", name: "Finance", color: "bg-yellow-500", lightColor: "bg-yellow-100", darkColor: "bg-yellow-900" },
  { id: "travel", name: "Travel", color: "bg-teal-500", lightColor: "bg-teal-100", darkColor: "bg-teal-900" },
  { id: "other", name: "Other", color: "bg-gray-500", lightColor: "bg-gray-100", darkColor: "bg-gray-900" },
] as const

type FilterType = "all" | "active" | "completed"

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("12:00")
  const [selectedCategory, setSelectedCategory] = useState<string>("other")
  const [filter, setFilter] = useState<FilterType>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const { toast } = useToast()

  const addTask = () => {
    if (newTaskTitle.trim() === "") return

    // Combine date and time
    let dueDate: Date | null = null
    if (selectedDate) {
      const date = new Date(selectedDate)
      if (selectedTime) {
        const [hours, minutes] = selectedTime.split(":").map(Number)
        date.setHours(hours, minutes)
      }
      dueDate = date
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      completed: false,
      dueDate,
      category: selectedCategory,
    }

    setTasks((prevTasks) => [newTask, ...prevTasks])
    setNewTaskTitle("")
    setSelectedDate(undefined)
    setSelectedTime("12:00")
    setSelectedCategory("other")

    toast({
      title: "Task added",
      description: "Your new task has been added successfully.",
    })
  }

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    toast({
      title: "Task deleted",
      description: "Your task has been deleted.",
      variant: "destructive",
    })
  }

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed))
    toast({
      title: "Completed tasks cleared",
      description: "All completed tasks have been removed.",
    })
  }

  const filteredTasks = tasks.filter((task) => {
    // Filter by completion status
    if (filter === "active" && task.completed) return false
    if (filter === "completed" && !task.completed) return false

    // Filter by category
    if (categoryFilter !== "all" && task.category !== categoryFilter) return false

    return true
  })

  const formatDueDate = (date: Date) => {
    return format(date, "MMMM d, h:mm a")
  }

  const getCategoryInfo = (categoryId: string) => {
    return CATEGORIES.find((cat) => cat.id === categoryId) || CATEGORIES[CATEGORIES.length - 1]
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
          Plan Your Day
        </h1>
        <ThemeToggle />
      </div>

      {/* Task Input */}
      <Card className="mb-8 border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <h2 className="text-lg font-medium text-slate-700 dark:text-slate-200">Add New Task</h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="What needs to be done?"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="border-2 border-purple-100 dark:border-purple-900 focus-visible:ring-purple-500"
            />
            <div className="flex flex-wrap gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal border-2 border-purple-100 dark:border-purple-900",
                      !selectedDate && "text-slate-500",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                </PopoverContent>
              </Popover>

              <TimePickerDemo value={selectedTime} onChange={setSelectedTime} />

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="justify-start text-left font-normal border-2 border-purple-100 dark:border-purple-900"
                  >
                    <div className={cn("w-3 h-3 rounded-full mr-2", getCategoryInfo(selectedCategory).color)} />
                    {getCategoryInfo(selectedCategory).name}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3" align="start">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-slate-700 dark:text-slate-200 mb-3">Select Category</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {CATEGORIES.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setSelectedCategory(category.id)}
                          className={cn(
                            "justify-start h-auto p-2",
                            selectedCategory === category.id &&
                              "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
                          )}
                        >
                          <div className={cn("w-3 h-3 rounded-full mr-2", category.color)} />
                          <span className="text-xs">{category.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Button
                onClick={addTask}
                className="ml-auto bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Task
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter Controls */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Tabs
            defaultValue="all"
            value={filter}
            onValueChange={(value) => setFilter(value as FilterType)}
            className="w-full sm:w-auto"
          >
            <TabsList className="grid grid-cols-3 w-full sm:w-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
          </Tabs>

          {tasks.some((task) => task.completed) && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearCompletedTasks}
              className="ml-auto border-2 border-red-100 dark:border-red-900 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-500"
            >
              <X className="mr-2 h-4 w-4" /> Clear completed
            </Button>
          )}
        </div>

        {/* Category Filter */}
        <Card className="border-0 shadow-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={categoryFilter === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setCategoryFilter("all")}
                className={cn(
                  "h-8 px-3 text-xs",
                  categoryFilter === "all" && "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
                )}
              >
                All Categories
              </Button>
              {CATEGORIES.map((category) => {
                const taskCount = tasks.filter((task) => task.category === category.id && !task.completed).length
                return (
                  <Button
                    key={category.id}
                    variant={categoryFilter === category.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCategoryFilter(category.id)}
                    className={cn(
                      "h-8 px-3 text-xs",
                      categoryFilter === category.id &&
                        `${category.lightColor} dark:${category.darkColor} text-slate-700 dark:text-slate-200`,
                    )}
                  >
                    <div className={cn("w-2 h-2 rounded-full mr-1.5", category.color)} />
                    {category.name}
                    {taskCount > 0 && (
                      <span className="ml-1 px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded-full text-xs">
                        {taskCount}
                      </span>
                    )}
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task List */}
      {filteredTasks.length === 0 ? (
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-teal-100 dark:from-purple-900 dark:to-teal-900 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200 mb-2">
              {filter === "all" ? "No tasks yet" : filter === "active" ? "No active tasks" : "No completed tasks"}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center">
              {filter === "all"
                ? "Add a new task to get started"
                : filter === "active"
                  ? "All your tasks are completed!"
                  : "Complete some tasks to see them here"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <Card
              key={task.id}
              className={cn(
                "border-0 shadow-md transition-all duration-300 hover:shadow-lg",
                task.completed
                  ? "bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm"
                  : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm",
              )}
            >
              <CardContent className="p-4 flex items-start gap-4">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                  className="mt-1 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1",
                        task.completed
                          ? "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                          : `${getCategoryInfo(task.category).lightColor} dark:${getCategoryInfo(task.category).darkColor} text-slate-700 dark:text-slate-200`,
                      )}
                    >
                      <div className={cn("w-2 h-2 rounded-full", getCategoryInfo(task.category).color)} />
                      {getCategoryInfo(task.category).name}
                    </div>
                  </div>
                  <h3
                    className={cn(
                      "text-lg font-medium mb-1 break-words",
                      task.completed
                        ? "text-slate-500 dark:text-slate-400 line-through"
                        : "text-slate-700 dark:text-slate-200",
                    )}
                  >
                    {task.title}
                  </h3>
                  {task.dueDate && (
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>Due by: {formatDueDate(task.dueDate)}</span>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteTask(task.id)}
                  className="text-slate-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Task Count */}
      {tasks.length > 0 && (
        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {tasks.filter((t) => !t.completed).length} active tasks | {tasks.filter((t) => t.completed).length} completed
        </div>
      )}
    </div>
  )
}
