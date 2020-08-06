import React from "react";
import "./../styles.css";
import err from "./../Components/Vector.svg"
import MaskedInput from "react-text-mask";
import {useFormik} from "formik";

export const Delivery = ({activeTab}) => {
    const validate = values => {
        let errors = {};
        (!values.fullname)
            ? (errors.fullname = "Обязательное поле")
            : (!/^[а-яА-ЯёЁ\s-]+$/.test(values.fullname)) &&  (errors.fullname = 'Только кириллица');
        (!values.phone)
            ? (errors.phone = "Обязательное поле")
            : (!/^[0-9\s()-]+$/.test(values.phone)) && (errors.phone = 'Только цифры');
        (!values.address) && (errors.address = "Обязательное поле");
        (!values.comment) && (errors.comment = "Обязательное поле");
        return errors
    };
    const deliveryFormik = useFormik({
        initialValues: {
            fullname: '',
            phone: '',
            address: '',
            comment: '',
        },
        validate
    });
    return (
        <section className={activeTab ? "tab1-content" : "tab1-content hidden"}>
            <form className="form form__delivery" onSubmit={deliveryFormik.handleSubmit} autoComplete={"off"}>
                <div className="form__line">
                    <label className="form__block"><span className="form__field-title">ФИО</span>
                        <input type="text"
                               className="form__input"
                               name="fullname"
                               id="fullname-field"
                               placeholder="Только кириллица"
                               onBlur={deliveryFormik.handleBlur}
                               onChange={deliveryFormik.handleChange}
                               value={deliveryFormik.values.fullname}
                               disabled={deliveryFormik.isSubmitting}/>
                        {deliveryFormik.touched.fullname && deliveryFormik.errors.fullname
                            ? <div>
                                <div className="error">{deliveryFormik.errors.fullname}</div>
                                <img src={err} className="alert" alt="alert"/>
                            </div>
                            : null}
                    </label>
                    <label className="form__block"><span className="form__field-title">Телефон</span>

                        <MaskedInput
                            mask={[/[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                            className="form__input"
                            name="phone"
                            guide={true}
                            id="phone-field"
                            placeholder="+7 (___) ___-__-__ "
                            onBlur={deliveryFormik.handleBlur}
                            onChange={deliveryFormik.handleChange}
                            value={deliveryFormik.values.phone}
                            disabled={deliveryFormik.isSubmitting}
                        />
                        {deliveryFormik.touched.phone && deliveryFormik.errors.phone
                            ? <div>
                                <div className="error">{deliveryFormik.errors.phone}</div>
                                <img src={err} className="alert" alt="alert"/>
                            </div>
                            : null}
                    </label>
                </div>
                <div className="form__line">
                    <label className="form__block">
                        <span className="form__field-title">Адрес доставки</span>
                        <input type="text"
                               className="form__input"
                               name="address"
                               id="address-field"
                               placeholder="Город, улица, дом"
                               onBlur={deliveryFormik.handleBlur}
                               onChange={deliveryFormik.handleChange}
                               value={deliveryFormik.values.address}
                               disabled={deliveryFormik.isSubmitting}/>
                        {deliveryFormik.touched.address && deliveryFormik.errors.address
                            ? <div>
                                <div className="error">{deliveryFormik.errors.address}</div>
                                <img src={err} className="alert" alt="alert"/>
                            </div>
                            : null
                        }
                    </label>
                </div>
                <div className="form__line">
                    <label className="form__block">
                        <span className="form__field-title">Комментарий</span>
                        <textarea className="form__textarea"
                                  name="comment"
                                  id="comment-field"
                                  rows="6"
                                  onBlur={deliveryFormik.handleBlur}
                                  onChange={deliveryFormik.handleChange}
                                  value={deliveryFormik.values.comment}
                                  disabled={deliveryFormik.isSubmitting}>
                    </textarea>
                        {deliveryFormik.touched.comment && deliveryFormik.errors.comment
                            ? <div>
                                <div className="error">{deliveryFormik.errors.comment}</div>
                                <img src={err} className="alert" alt="alert"/>
                            </div>
                            : null
                        }
                    </label>
                </div>
                <div className="form__line">
                    <label className="form__submit">
                        <input type="submit"
                               className="form__btn"
                               value="Оформить заказ" disabled={deliveryFormik.isSubmitting}/>
                    </label>
                </div>
            </form>
        </section>
    )
};



