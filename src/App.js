import React from 'react';
import './styles.css';
import {Route} from "react-router-dom";
import {Pickup} from "./Components/Pickup";
import Tabs from "./Components/Tabs";
import {YMaps} from "react-yandex-maps";
import {useFormik} from "formik";
import {Delivery} from "./Components/Delivery";

const App = () => {
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
        validate,
    });
    return (
      <div className="container">
          <div className="content">
              <header className="title">
                  Выберите способ доставки
              </header>
              <Tabs/>
              <main>
                <Route exact path='/' render={() => (
                    <Delivery values={deliveryFormik.values}
                              onChange={deliveryFormik.handleChange}
                              onBlur={deliveryFormik.handleBlur}
                              errors={deliveryFormik.errors}
                              touched={deliveryFormik.touched}
                              handleSubmit={deliveryFormik.handleSubmit}
                              isSubmitting={deliveryFormik.isSubmitting}
                    />)}
                />

                <Route exact path='/delivery' render={() => (
                    <Delivery values={deliveryFormik.values}
                              onChange={deliveryFormik.handleChange}
                              onBlur={deliveryFormik.handleBlur}
                              errors={deliveryFormik.errors}
                              touched={deliveryFormik.touched}
                              handleSubmit={deliveryFormik.handleSubmit}
                              isSubmitting={deliveryFormik.isSubmitting}
                    />)}
                />

                <Route path='/pickup' render={() => (
                    <YMaps>
                        <Pickup/>
                    </YMaps>
                    )}
                />
              </main>
          </div>
      </div>
  );
};


export default App;
