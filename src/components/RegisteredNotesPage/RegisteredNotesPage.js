/* eslint-disable max-len */
import React, { useState } from 'react';
import './RegisteredNotesPage.scss';
import { Button, Form, Icon, Modal, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, notesSelector } from '../../store/registredNotesReducer';
import { currentUserSelector } from '../../store/usersReducer';

const entities = [
  {
    key: '1', text: 'ооо "Начало"', value: 'ооо "Начало"',
  },
  {
    key: '2', text: 'Фирма "бизнес груп', value: 'Фирма "бизнес груп',
  },
  {
    key: '3', text: 'предприятие "Танковый завод  №54"', value: 'предприятие "Танковый завод  №54',
  },
];

const cities = [
  {
    key: '1в', text: 'Москва', value: 'Москва',
  },
  {
    key: '2в', text: 'Киев', value: 'Киев',
  },
  {
    key: '3в', text: 'Беларусь', value: 'Беларусь',
  },
];

const RegisteredNotesPage = () => {
  const dispatch = useDispatch();
  const registeredNotes = useSelector(notesSelector);
  const currentUser = useSelector(currentUserSelector);
  const [newNoteData, setNewNoteData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleFormInputChange = (e, { name, value }) => {
    setNewNoteData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmitForm = () => {
    dispatch(addNote(
      {
        ...newNoteData,
        writtenBy: currentUser,
        timeOfAdding: new Date(),
      }
    ));
    setNewNoteData({});
    setShowModal(false);
  };

  return (
    <div>
      <Modal open={showModal}>
        <Modal.Header>Внесите данные</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                onChange={handleFormInputChange}
                fluid
                name="fio"
                label="ФИО"
                placeholder="ФИО"
              />
              <Form.Select
                onChange={handleFormInputChange}
                fluid
                name="entity"
                label="Сотрудник"
                options={entities}
                placeholder="выберите из списка"
              />
              <Form.Select
                onChange={handleFormInputChange}
                name="city"
                fluid
                label="Город"
                options={cities}
                placeholder="выберите город"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                onChange={handleFormInputChange}
                name="registerDate"
                fluid
                label="Дата регистрации"
                placeholder={(new Date()).toLocaleString()}
              />
              <Form.TextArea
                onChange={handleFormInputChange}
                name="comment"
                fluid
                label="Комментарий"
                placeholder="Комментарий"
              />
              <Form.Input
                onChange={handleFormInputChange}
                name="temperature"
                fluid
                label="Температура"
                placeholder="температура"
              />

            </Form.Group>

          </Form>
          <Modal.Actions>
            <Button
              onClick={() => {
                setShowModal(false);
              }}
              color="black"
            >
              Отмена
            </Button>
            <Button
              onClick={handleSubmitForm}
              positive
              icon="checkmark"
              labelPosition="right"
              content="Добавить запись в базу"
            />
          </Modal.Actions>
        </Modal.Content>
      </Modal>

      <Table compact celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ФИО</Table.HeaderCell>
            <Table.HeaderCell>Сотрудник</Table.HeaderCell>
            <Table.HeaderCell>Дата регистрации</Table.HeaderCell>
            <Table.HeaderCell>Температура</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            registeredNotes.map(({ id, fio, entity, registerDate, temperature }) => (
              <Table.Row key={id}>
                <Table.Cell>{fio}</Table.Cell>
                <Table.Cell>{entity}</Table.Cell>
                <Table.Cell>{registerDate}</Table.Cell>
                <Table.Cell>{temperature}</Table.Cell>
              </Table.Row>
            ))
          }
          <Table.Row>

            <Table.Cell colSpan="4">
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" />
                {' '}
Добавить запись
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default RegisteredNotesPage;
