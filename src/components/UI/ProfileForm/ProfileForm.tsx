import { useState } from "react";
import { FiEdit3  } from "react-icons/fi";

import s from "./ProfileForm.module.scss";

type Address = {
  city: string;
};

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState<Address[]>([{ city: "" }]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.replace(/[^A-Za-z]/gi, ""));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/[^0-9]/gi, ""));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.replace(/[^A-Za-z]/gi, ""));
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: keyof Address
  ) => {
    const newAddress = [...address];
    newAddress[index][key] = e.target.value.replace(/[^A-Za-z]/gi, "");
    setAddress(newAddress);
  };

  const handleAddAddress = () => {
    setAddress([...address, { city: "" }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, phone, email, address });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.labels}>
        <label className={s.inputName} htmlFor="name">
          Name :
        </label>
        <label className={s.inputName} htmlFor="phone">
          Phone:
        </label>
        <label className={s.inputName} htmlFor="email">
          Email :
        </label>
        <label className={s.inputName} htmlFor="address">
          Shipping addresses:
        </label>
      </div>
      <div className={s.inputs}>
        <div className={s.inputSection}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
            required
          />
          <FiEdit3 className={s.icon} color="7ac751" />
        </div>
        <div className={s.inputSection}>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+38-000-000-00-00"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <FiEdit3 className={s.icon} color="7ac751" />
        </div>
        <div className={s.inputSection}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user@email.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <FiEdit3 className={s.icon} color="7ac751" />
        </div>
        <div className={s.inputSection}>
          <div className={`${s.manyAddress} `}>
            {address.map((addr, index) => (
              <div className={s.addresses} key={index}>
                <input
                  type="text"
                  value={addr.city}
                  placeholder="City"
                  onChange={(e) => handleAddressChange(e, index, "city")}
                  required
                />
                <FiEdit3 className={s.icon} color="7ac751" />
              </div>
            ))}
          </div>
          <button type="button" onClick={handleAddAddress}>
          + add new address
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
