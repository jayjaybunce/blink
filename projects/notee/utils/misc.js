const formatDate = (dateStr) => {
    let date = new Date(dateStr)
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
}

module.exports={
    formatDate
}