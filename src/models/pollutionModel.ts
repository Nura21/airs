// src/models/pollutionModel.ts

import db from '../config/database';
import { RowDataPacket, OkPacket } from 'mysql2';

interface PollutionData {
  id?: number;
  tanggal: string;
  pm10: number;
  pm25: number;
  so2: number;
  co: number;
  o3: number;
  no2: number;
  max: number;
  critical: string;
  categori: string;
  location: string;
}

// Define the SELECT method to explicitly use RowDataPacket[]
export const getAllPollutionData = (callback: (err: Error | null, results?: PollutionData[]) => void): void => {
  db.query('SELECT * FROM pollution_data', (err, results: RowDataPacket[]) => {
    if (err) return callback(err);
    callback(null, results as PollutionData[]);
  });
};

export const getPollutionDataById = (id: number, callback: (err: Error | null, data?: PollutionData) => void): void => {
  db.query('SELECT * FROM pollution_data WHERE id = ?', [id], (err, results: RowDataPacket[]) => {
    if (err) return callback(err);
    callback(null, results[0] as PollutionData);
  });
};

// INSERT method with OkPacket
export const createPollutionData = (data: PollutionData, callback: (err: Error | null, result?: PollutionData) => void): void => {
  db.query('INSERT INTO pollution_data SET ?', data, (err, results: OkPacket) => {
    if (err) return callback(err);
    callback(null, { id: results.insertId, ...data });
  });
};

// UPDATE method with OkPacket
export const updatePollutionData = (id: number, data: PollutionData, callback: (err: Error | null, result?: any) => void): void => {
  db.query('UPDATE pollution_data SET ? WHERE id = ?', [data, id], (err, results: OkPacket) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// DELETE method with OkPacket
export const deletePollutionData = (id: number, callback: (err: Error | null, result?: any) => void): void => {
  db.query('DELETE FROM pollution_data WHERE id = ?', [id], (err, results: OkPacket) => {
    if (err) return callback(err);
    callback(null, results);
  });
};
