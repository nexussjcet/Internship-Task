import React, { useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, FlatList, View, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const priorities = [
  { label: 'Low Priority', value: 'low', emoji: '🟢' },
  { label: 'Medium Priority', value: 'medium', emoji: '🟡' },
  { label: 'High Priority', value: 'high', emoji: '🔴' },
];

const categories = [
  { label: 'Personal', value: 'personal', emoji: '⭐' },
  { label: 'Work', value: 'work', emoji: '💼' },
  { label: 'Other', value: 'other', emoji: '📁' },
];

type Todo = {
  title: string;
  description: string;
  date: string;
  time: string;
  priority: string;
  category: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState(priorities[1].value);
  const [category, setCategory] = useState(categories[0].value);

  // Date/Time picker state
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleDateChange = (_: any, selectedDate?: Date) => {
    setShowDate(false);
    if (selectedDate) {
      const d = selectedDate;
      setDate(`${d.getDate().toString().padStart(2, '0')}-${(d.getMonth()+1).toString().padStart(2, '0')}-${d.getFullYear()}`);
    }
  };

  const handleTimeChange = (_: any, selectedTime?: Date) => {
    setShowTime(false);
    if (selectedTime) {
      const t = selectedTime;
      setTime(`${t.getHours().toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')}`);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setPriority(priorities[1].value);
    setCategory(categories[0].value);
  };

  const addTodo = () => {
    if (!title.trim()) return;
    setTodos([
      ...todos,
      { title, description, date, time, priority, category, completed: false }
    ]);
    resetForm();
  };

  const deleteTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  const toggleComplete = (idx: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f7fa' }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create New Task</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Task Title</Text>
        <TextInput
          placeholder="What needs to be done?"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="Add more details..."
          value={description}
          onChangeText={setDescription}
          style={[styles.input, { height: 60 }]}
          placeholderTextColor="#888"
          multiline
        />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Due Date</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowDate(true)}
            >
              <Text style={{ color: date ? '#22223b' : '#888' }}>
                {date || 'dd-mm-yyyy'}
              </Text>
            </TouchableOpacity>
            {showDate && (
              <DateTimePicker
                value={date ? new Date(date.split('-').reverse().join('-')) : new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleDateChange}
              />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Due Time</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowTime(true)}
            >
              <Text style={{ color: time ? '#22223b' : '#888' }}>
                {time || '--:--'}
              </Text>
            </TouchableOpacity>
            {showTime && (
              <DateTimePicker
                value={new Date()}
                mode="time"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleTimeChange}
              />
            )}
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Priority</Text>
            <View style={styles.dropdown}>
              {priorities.map((p) => (
                <TouchableOpacity
                  key={p.value}
                  style={[
                    styles.dropdownItem,
                    priority === p.value && styles.dropdownItemSelected,
                  ]}
                  onPress={() => setPriority(p.value)}
                >
                  <Text style={{ fontSize: 16 }}>
                    {p.emoji} {p.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.dropdown}>
              {categories.map((c) => (
                <TouchableOpacity
                  key={c.value}
                  style={[
                    styles.dropdownItem,
                    category === c.value && styles.dropdownItemSelected,
                  ]}
                  onPress={() => setCategory(c.value)}
                >
                  <Text style={{ fontSize: 16 }}>
                    {c.emoji} {c.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
          <TouchableOpacity style={styles.cancelButton} onPress={resetForm}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.createButton,
              !title.trim() && { opacity: 0.5 },
            ]}
            onPress={addTodo}
            disabled={!title.trim()}
          >
            <Text style={styles.createButtonText}>Create Task</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.listHeader}>Tasks</Text>
      <FlatList
        data={todos}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.todoItem,
              item.completed && { opacity: 0.5, backgroundColor: '#e0e7ff' },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.todoTitle,
                  item.completed && { textDecorationLine: 'line-through', color: '#888' },
                ]}
              >
                {item.title}
              </Text>
              {item.description ? (
                <Text
                  style={[
                    styles.todoDescription,
                    item.completed && { textDecorationLine: 'line-through', color: '#aaa' },
                  ]}
                >
                  {item.description}
                </Text>
              ) : null}
              <View style={{ flexDirection: 'row', marginTop: 6, gap: 12 }}>
                <Text style={styles.todoMeta}>📅 {item.date || '--'}</Text>
                <Text style={styles.todoMeta}>⏰ {item.time || '--:--'}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 6, gap: 12 }}>
                <Text style={styles.todoMeta}>
                  {priorities.find(p => p.value === item.priority)?.emoji}{' '}
                  {priorities.find(p => p.value === item.priority)?.label}
                </Text>
                <Text style={styles.todoMeta}>
                  {categories.find(c => c.value === item.category)?.emoji}{' '}
                  {categories.find(c => c.value === item.category)?.label}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <TouchableOpacity
                onPress={() => toggleComplete(index)}
                style={{
                  marginRight: 10,
                  backgroundColor: item.completed ? '#7c3aed' : '#ede9fe',
                  borderRadius: 20,
                  padding: 8,
                }}
              >
                <Text style={{ fontSize: 18, color: item.completed ? '#fff' : '#7c3aed' }}>
                  {item.completed ? '✅' : '☑️'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteTodo(index)}
                style={{
                  backgroundColor: '#fee2e2',
                  borderRadius: 20,
                  padding: 8,
                }}
              >
                <Text style={{ fontSize: 18, color: '#ef4444' }}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={{ marginTop: 16 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet. Add one above!</Text>
        }
      />
    </ScrollView>
  );
}

const styles = {
  header: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7c3aed',
    marginBottom: 10,
  },
  form: {
    backgroundColor: '#f3f0ff',
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 18,
    shadowColor: '#7c3aed',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#7c3aed',
    marginBottom: 4,
    marginTop: 10,
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdb4fe',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#22223b',
  },
  dropdown: {
    backgroundColor: '#ede9fe',
    borderRadius: 10,
    marginBottom: 8,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemSelected: {
    backgroundColor: '#c7d2fe',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ede9fe',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#7c3aed',
    fontWeight: 'bold',
    fontSize: 18,
  },
  createButton: {
    flex: 1,
    backgroundColor: 'linear-gradient(90deg, #a78bfa, #7c3aed)',
    backgroundColor: '#a78bfa',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  listHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7c3aed',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  todoItem: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 18,
    borderRadius: 14,
    shadowColor: '#7c3aed',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoTitle: {
    fontSize: 18,
    color: '#22223b',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  todoDescription: {
    fontSize: 15,
    color: '#444',
    marginBottom: 2,
  },
  todoMeta: {
    fontSize: 14,
    color: '#7c3aed',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
  },
};