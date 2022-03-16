import { uploadFileService } from '@data/services';


const mockedUploadFileService = jest.fn();

jest.mock('@data/services', () => {
    return {
        uploadFileService: (file) => mockedUploadFileService(file)
    };
});

describe('--- Upload File Service ---', () => {
    const file = {
        name: 'test.png',
        size: 180,
        type: 'image/png',
        path: 'test'
    }

    beforeEach(() => {
        mockedUploadFileService.mockClear();
    });

    it('to upload a file successfully', async () => {
        const response = {
            Name: file.name,
            Hash: 'test',
            Size: file.size,
        }
        mockedUploadFileService.mockImplementation(() => {
            return Promise.resolve(response);
        });
        const data = await uploadFileService(file);
        expect(mockedUploadFileService).toBeCalledWith(file);
        expect(data).toEqual(response);
    });

    it('File Uploading Failed', async () => {
        mockedUploadFileService.mockImplementation(() => {
            return Promise.resolve({
                status: 500,
                message:'Something went wrong. please try again later'
            });
        });
        const data = await uploadFileService(file);
        expect(mockedUploadFileService).toBeCalledWith(file);
        expect(data.status).toBe(500);
    });
});
