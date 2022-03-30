import React, { useState } from 'react'

import {
  Button,
  Modal,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
} from 'reactstrap'
import MaskedInput from 'react-input-mask'

const UserModal = ({
  modalTitle,
  typeButton,
  modal,
  toggle,
  onClosed,
  modalControl,
  handleSubmit,
  singleUser,
  setSingleUser,
  initialGroups,
}) => {
  const [deleteUserName, setDeleteUserName] = useState()

  function handleUserInformation(e) {
    const { name, value } = e.target

    setSingleUser((prev) => {
      return { ...prev, [name]: value }
    })
  }
  console.log(singleUser)
  return (
    <Modal isOpen={modal} toggle={toggle} onClosed={onClosed}>
      <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        {modalControl === 'create' ? (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='exampleName'>Username</Label>
              <Input
                type='name'
                name='username'
                required
                id='username'
                value={singleUser.username}
                onChange={(e) => {
                  handleUserInformation(e)
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for='username'>Email</Label>
              <Input
                type='email'
                name='email'
                required
                value={singleUser.email}
                id='email'
                onChange={(e) => {
                  handleUserInformation(e)
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for='phone_number'>Phone</Label>
              <Input
                type='tel'
                name='phone_number'
                placeholder='555-555-55-55'
                required
                value={singleUser.phone_number}
                tag={MaskedInput}
                mask='999 999 9999'
                id='phone_number'
                onChange={(e) => {
                  handleUserInformation(e)
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='groupname'>Department</Label>
              <Input
                type='select'
                id='groupname'
                name='groupname'
                value={singleUser.groupname}
                required
                onChange={(e) => {
                  handleUserInformation(e)
                }}
              >
                <option value=''>Select</option>
                {initialGroups.map((x) => {
                  return <option value={x.value}>{x.name}</option>
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Button color='primary' type='Submit' value='Submit'>
                {typeButton}
              </Button>
            </FormGroup>
          </Form>
        ) : modalControl === 'delete' ? (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='username'>
                Are you sure you want to delete{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  {singleUser.username}
                </span>
                ?
                <br />
                <span>Type the user's name to confirm the deletion:</span>
              </Label>
              <Input
                type='name'
                name='name'
                required
                id=''
                onChange={(e) => setDeleteUserName(e.target.value)}
              />
            </FormGroup>
            {deleteUserName === singleUser.username ? (
              <Button color='primary' type='Submit' value='Submit'>
                Delete
              </Button>
            ) : (
              <Button color='primary' type='Submit' value='Submit' disabled>
                Delete
              </Button>
            )}
          </Form>
        ) : null}
      </ModalBody>
    </Modal>
  )
}

export default UserModal
