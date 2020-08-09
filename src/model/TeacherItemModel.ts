export interface TeacherItemModel {
    teacher: TeacherModel;
}

export interface TeacherModel {
    id: number;
    user_id: number;
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    subject: string;
    whatsapp: string;
}
