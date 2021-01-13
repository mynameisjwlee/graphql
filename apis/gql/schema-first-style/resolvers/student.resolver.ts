import { Resolvers, Student } from "../schema/student.type";
import { studentDatas } from '../models';

export const studentResolver: Resolvers = {
    Query: {
        student: (_, { id }): Student => {
            const idx: number = id - 1;
            return studentDatas[idx];
        },
        students: (): Student[] => {
            return studentDatas;
        },
    },
    Mutation: {
        register: (_, { name, information, age, address, email }): Student => {
            const numberOfStudent = studentDatas.length;
            const newStudent: Student = {
                id: numberOfStudent + 1,
                name,
                information,
                age,
                address,
                email,
            };
            studentDatas.push(newStudent);
            return newStudent;
        },
        update: (_, { id, name, information, age, address, email }): Student => {
            const targetStudent: Student = studentDatas[id - 1];
            if (name) targetStudent.name = name;
            if (age) targetStudent.age = age;
            if (address) targetStudent.address = address;
            if (email) targetStudent.email = email;
            if (information) {
                // 왜 이상하게 인식되지..
                // targetStudent.information.doubleMajor = information.department ?? targetStudent.information.doubleMajor;
                if (information.department) targetStudent.information.department = information.department;
                if (information.major) targetStudent.information.major = information.major;
                if (information.semester) targetStudent.information.semester = information.semester;
                if (information.doubleMajor) targetStudent.information.doubleMajor = information.doubleMajor;
            }
            return targetStudent;
        },
    },
    Student: {
        isUnderage: (parent): boolean | null => {
            if (!parent.age) return null;
            return parent.age < 19;
        },
    }
};
