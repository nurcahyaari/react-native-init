import AsyncStorage from '@react-native-community/async-storage';

class Storage {
    private storage:any;

    public constructor() {
        this.storage = AsyncStorage;
    }

    public async SetItems(param: string, value: string):Promise<void> {
        try {
            await this.storage.setItem(param, value);
        } catch (e) {
            throw new Error('Error when saving data to localstorage');
        }
    }

    public async GetItems(param: string): Promise<any> {
        const data = await this.storage.getItem(param);
        return data;
    }
}

const storage = new Storage();
export default storage;
