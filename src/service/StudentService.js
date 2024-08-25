import axios from "axios";

const URL_STUDENT = "http://localhost:8080/students"

export const getAllStudents = async (minPoint, maxPoint) => {
    try {
        let URL__STUDENT = "http://localhost:8080/students"
        if (minPoint !== "" && maxPoint !== "") {
            URL__STUDENT += `?point_gte=${minPoint}&point_lte=${maxPoint}`;
        }
        let res = await axios.get(URL__STUDENT);
        return res.data;
    } catch (e) {
        console.error("Error fetching students:", e);
        return []
    }
}

export const saveStudent = async (student) => {
    try {
        await  axios.post(URL_STUDENT, student)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const findStudentById = async (id) => {
    try {
        let res = await axios.get(URL_STUDENT+"/"+id)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const deleteStudent = async (id) => {
    try {
        await axios.delete(URL_STUDENT + "/" + id)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const updateStudent = async (id, student) => {
    try {
        await axios.put(URL_STUDENT + "/" + student.id, student)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};