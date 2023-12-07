const ShowSwalAlert = ( icon, title , callback) => {
    Swal.fire({
        position: "top-center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500
      }).then(result => callback(result))
}
export { ShowSwalAlert } 