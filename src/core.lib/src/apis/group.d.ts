import { GroupMember, GroupRequestOperateTypes, GroupMemberRole, GroupNotify, Group } from '../entities';
export declare class NTQQGroupApi {
    static getGroups(forced?: boolean): Promise<Group[]>;
    static getSingleScreenNotifies(num: number): Promise<GroupNotify[]>;
    static getGroupMembers(groupQQ: string, num?: number): Promise<Map<string, GroupMember>>;
    static getGroupNotifies(): Promise<void>;
    static getGroupIgnoreNotifies(): Promise<void>;
    static uploadGroupBulletinPic(GroupCode: string, imageurl: string): Promise<import("@/core").GeneralCallResult & {
        errCode: number;
        picInfo?: {
            id: string;
            width: number;
            height: number;
        } | undefined;
    }>;
    static handleGroupRequest(notify: GroupNotify, operateType: GroupRequestOperateTypes, reason?: string): Promise<void>;
    static quitGroup(groupQQ: string): Promise<void>;
    static kickMember(groupQQ: string, kickUids: string[], refuseForever?: boolean, kickReason?: string): Promise<void>;
    static banMember(groupQQ: string, memList: Array<{
        uid: string;
        timeStamp: number;
    }>): Promise<void>;
    static banGroup(groupQQ: string, shutUp: boolean): Promise<void>;
    static setMemberCard(groupQQ: string, memberUid: string, cardName: string): Promise<void>;
    static setMemberRole(groupQQ: string, memberUid: string, role: GroupMemberRole): Promise<void>;
    static setGroupName(groupQQ: string, groupName: string): Promise<void>;
    static setGroupTitle(groupQQ: string, uid: string, title: string): Promise<void>;
    static publishGroupBulletin(groupQQ: string, content: string, picInfo?: {
        id: string;
        width: number;
        height: number;
    } | undefined, pinned?: number, confirmRequired?: number): Promise<import("@/core").GeneralCallResult>;
}
