import React, { useContext } from 'react'
import { TripContext } from '../../utils/TripContext';
import { UserContext } from '../../utils/UserContext';
import { Input } from '../Form'

const AddFriends = (props) => {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);
  const { currentUser } = useContext(UserContext)

  return (
    <div>
      Add Friends Here
      <form>
        <Input
          // onChange={handleInputChange}
          name="friend_email"
          placeholder="Friend's Email"
        />
        <button>
          Add Friend
        </button>
      </form>
    </div>

  )
}

export default AddFriends