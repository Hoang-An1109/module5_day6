import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as studentService from "../../service/StudentService"

function StudentListFunc() {
    const [students, setStudents] = useState([]);
    const [minPoint, setMinPoint] = useState('');
    const [maxPoint, setMaxPoint] = useState('');

    useEffect (() => {
        getAllStudents(minPoint, maxPoint);
    }, [minPoint, maxPoint])

    const getAllStudents = async (minPoint, maxPoint) => {
        let res = await studentService.getAllStudents(minPoint, maxPoint);
        setStudents(res)
    }

    const handleDelete = async (id) => {
        let result = await studentService.deleteStudent(id);
        if (result) {
            setStudents(students.filter(student => student.id !== id));
        }
    };

    return (
        <div className="container mt-5">
            <div className="mb-3">
                <Link to="/create" className="btn btn-primary">Thêm mới</Link>
            </div>

            <div className="mb-4">
                <h4>Tìm kiếm theo điểm</h4>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="minPoint">Điểm thấp nhất</label>
                        <input
                            type="number"
                            id="minPoint"
                            className="form-control"
                            value={minPoint}
                            min="0" // Giá trị tối thiểu
                            max="10"
                            onChange={(e) => {
                                const value = Math.max(0, Math.min(10, e.target.value));
                                setMinPoint(value);
                            }}                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="maxPoint">Điểm cao nhất</label>
                        <input
                            type="number"
                            id="maxPoint"
                            className="form-control"
                            value={maxPoint}
                            min="0"
                            max="10"
                            onChange={(e) => {
                                const value = Math.max(0, Math.min(10, e.target.value));
                                setMaxPoint(value);
                            }}                        />
                    </div>
                </div>
            </div>

            <table className="table table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.point}</td>
                            <td>
                                <Link to={`/edit/${item.id}`} className="btn btn-warning btn-sm">Sửa</Link>
                                <button onClick={() => handleDelete(item.id)}
                                        className="btn btn-danger btn-sm ms-2">Xóa
                                </button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default StudentListFunc;