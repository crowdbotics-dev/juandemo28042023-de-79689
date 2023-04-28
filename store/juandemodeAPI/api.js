import axios from "axios"
const juandemodeAPI = axios.create({
  baseURL: "https://juandemo28042023-de-79689-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_ebank_list(payload) {
  return juandemodeAPI.get(`/api/v1/ebank/`)
}
function api_v1_ebank_create(payload) {
  return juandemodeAPI.post(`/api/v1/ebank/`, payload.data)
}
function api_v1_login_create(payload) {
  return juandemodeAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return juandemodeAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_ewallet_list(payload) {
  return juandemodeAPI.get(`/api/v1/ewallet/`)
}
function api_v1_ewallet_create(payload) {
  return juandemodeAPI.post(`/api/v1/ewallet/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return juandemodeAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juandemodeAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return juandemodeAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return juandemodeAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return juandemodeAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return juandemodeAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juandemodeAPI.post(`/rest-auth/logout/`)
}
function api_v1_ebank_retrieve(payload) {
  return juandemodeAPI.get(`/api/v1/ebank/${payload.id}/`)
}
function api_v1_ebank_update(payload) {
  return juandemodeAPI.put(`/api/v1/ebank/${payload.id}/`, payload.data)
}
function api_v1_ebank_partial_update(payload) {
  return juandemodeAPI.patch(`/api/v1/ebank/${payload.id}/`, payload.data)
}
function api_v1_ebank_destroy(payload) {
  return juandemodeAPI.delete(`/api/v1/ebank/${payload.id}/`)
}
function api_v1_ewallet_retrieve(payload) {
  return juandemodeAPI.get(`/api/v1/ewallet/${payload.id}/`)
}
function api_v1_ewallet_update(payload) {
  return juandemodeAPI.put(`/api/v1/ewallet/${payload.id}/`, payload.data)
}
function api_v1_ewallet_partial_update(payload) {
  return juandemodeAPI.patch(`/api/v1/ewallet/${payload.id}/`, payload.data)
}
function api_v1_ewallet_destroy(payload) {
  return juandemodeAPI.delete(`/api/v1/ewallet/${payload.id}/`)
}
function api_v1_transactions_list(payload) {
  return juandemodeAPI.get(`/api/v1/transactions/`)
}
function api_v1_transactions_create(payload) {
  return juandemodeAPI.post(`/api/v1/transactions/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return juandemodeAPI.post(`/rest-auth/registration/`, payload.data)
}
function api_v1_transactions_retrieve(payload) {
  return juandemodeAPI.get(`/api/v1/transactions/${payload.id}/`)
}
function api_v1_transactions_update(payload) {
  return juandemodeAPI.put(`/api/v1/transactions/${payload.id}/`, payload.data)
}
function api_v1_transactions_partial_update(payload) {
  return juandemodeAPI.patch(
    `/api/v1/transactions/${payload.id}/`,
    payload.data
  )
}
function api_v1_transactions_destroy(payload) {
  return juandemodeAPI.delete(`/api/v1/transactions/${payload.id}/`)
}
function rest_auth_password_reset_create(payload) {
  return juandemodeAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return juandemodeAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juandemodeAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return juandemodeAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_ebank_list,
  api_v1_ebank_create,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_ewallet_list,
  api_v1_ewallet_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_ebank_retrieve,
  api_v1_ebank_update,
  api_v1_ebank_partial_update,
  api_v1_ebank_destroy,
  api_v1_ewallet_retrieve,
  api_v1_ewallet_update,
  api_v1_ewallet_partial_update,
  api_v1_ewallet_destroy,
  api_v1_transactions_list,
  api_v1_transactions_create,
  rest_auth_registration_create,
  api_v1_transactions_retrieve,
  api_v1_transactions_update,
  api_v1_transactions_partial_update,
  api_v1_transactions_destroy,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
