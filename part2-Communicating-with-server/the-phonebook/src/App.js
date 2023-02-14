import { useEffect, useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import Result from './Result'
import axios from 'axios'
import { create, deletePerson, getAll, update } from './services/persons'
import Notifiation from './Notification'

const App = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState();
  const [errorMessage, setErrorMessage] = useState({ type: '', message: '' });

  useEffect(() => {
    getAll()
      .then((data) => setPersons(data))
      .catch(error => {
        setErrorMessage({
          message: 'failed to load data from server',
          type: 'warn'
        })
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault()

    const personToAdd = {
      id: Math.random(),
      name: newName,
      number: newNumber
    };
    setNewName('');
    setNewNumber('');

    if (persons.map(x => x.name).includes(newName)) {
      const updatedPersons = [...persons]
      updatedPersons.forEach(x => {
        if (x.name === newName) {
          x.number = newNumber
          update(x.id, x).then(console.log).catch(console.log)
        }
      })
      setPersons(updatedPersons)
      return
    } else {
      create(personToAdd)
        .then(info => {
          setPersons(prev => [...prev, personToAdd])
          setErrorMessage({
            message: 'Person added',
            type: 'success'
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage({
            message: 'Person added failure',
            type: 'warn'
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }


  };

  const onFormChange = (formData) => {
    if (formData.type === 'name') {
      setNewName(formData.value)
    } else if (formData.type === 'number') {
      setNewNumber(formData.value)
    }
  };

  const onFilterChange = (e) => {
    setFilterCriteria(e.target.value.toLowerCase())
  };

  const onDelete = (id) => {
    if (window.confirm('are you sure')) deletePerson(id)
      .then(info => {
        setPersons(prev => prev.filter(person => person.id !== id))
        setErrorMessage({
          message: 'Person deleted',
          type: 'success'
        })
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      .catch(error => {
        const { response } = error
        setErrorMessage({
          message: response.status === 404 ? 'person already deleted' : 'Person deletion failed',
          type: 'warn'
        })
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        onChange={onFilterChange} />
      <Form
        onFormSubmit={onFormSubmit}
        onFormChange={onFormChange}
        name={newName}
        number={newNumber} />
      <h2>Numbers</h2>
      {errorMessage?.message ? <Notifiation type={errorMessage?.type} message={errorMessage?.message} /> : null}
      <Result
        filterCriteria={filterCriteria}
        onDelete={onDelete}
        persons={persons} />
    </div>
  )

}

export default App