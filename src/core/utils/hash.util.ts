import * as bcrypt from 'bcrypt';
/**
 * this function is used to hash the password
 * @param password 
 * @returns Promise<string>
 */
export const hashPassword = async (password: string): Promise<string> =>
    (await bcrypt.hash(password, Number(process.env.JWT_SALT_OR_ROUNDS) || 10)) as string;

/**
 * this function is used to compare the password
 * @param password 
 * @param hash 
 * @returns Promise<boolean>
 */
export const comparePassword = async (password: string, hash: string): Promise<boolean> =>
    (await bcrypt.compare(password, hash)) as boolean;
