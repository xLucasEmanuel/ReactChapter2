import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela de Website",
          type: "deposit",
          category: "DEV",
          amount: 6000,
          createdAt: new Date("2021-12-03 09:10:00")

        },
        {
          id: 2,
          title: "Alugel",
          type: "withdraw",
          category: "Casa ",
          amount: 500,
          createdAt: new Date("2022-12-10 19:10:00"),

        }
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

