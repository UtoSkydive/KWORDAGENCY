const Alert = ({
  message = "Tu mensaje se envio satisfactoriamente!",
  type = "success",
}) => {
  return (
    <div
      className={`py-2 px-3 d-flex align-items-center justify-content-between alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
