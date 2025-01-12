import { mapLiveness, mapReadiness } from "../mapper/healthCheck.mapper";
import { getLivenessStatus, getReadinessStatus } from "../services/healthCheck.service";

const getLivenessStatusController = async () => {
    const status = await getLivenessStatus();
    return mapLiveness(status);
};

const getReadinessStatusController = async () => {
    const status = await getReadinessStatus();
    return mapReadiness(status);
};

export { getLivenessStatusController, getReadinessStatusController }