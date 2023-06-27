import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);

  const { contact, keyWord } = useSelector((state) => state);

  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyWord !== "") {
      let list = contact.filter((item) => item.name.includes(keyWord));

      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyWord]);

  return (
    <div>
      <SearchBox />
      <div>
        {filteredList?.map((item) => (
          <ContactItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
