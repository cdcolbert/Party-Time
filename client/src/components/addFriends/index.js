import React from 'react'
import { Input } from '../Form'

const AddFriends = () => {

  return (
    <div>
      Add Friends Here
      <form>
        <Input
          // onChange={handleInputChange}
          name="trip_name"
          placeholder="Friend's Email"
        />

      </form>
    </div>

  )
}

export default AddFriends