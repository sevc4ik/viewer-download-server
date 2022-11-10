

const versionTemplate = {
  version: '',
  releaseDate: '',
  releaseNotes: '',
  platforms: {
    platform: '',
    fileName: '',
  }
}

const createPlatfromObj = (data) => {
  const obj = {
    platform: data.platform,
      fileName: data.filename,
  }

  return obj;
}

const createVersionObj = (data) => {
  const obj = {
    version: data.version,
    releaseDate: data.releaseDate,
    releaseNotes: data.releaseNotes,
    platforms: [{
      platform: data.platform,
      fileName: data.filename,
    }]
  }

  return obj;
}

export const filterData = (data, currentVersion, client) => {
  const template = {
    currentVersion: '',
    client: '',
    versions: [],
  };

  if (data.length > 1) template.versions.push(createVersionObj(data[0]));

  for (let i = 1; i < data.length; i++) {
    if (data[i - 1].version === data[i].version) {
      template.versions[template.versions.length - 1].platforms.push(createPlatfromObj(data[i]))
    } else {
      template.versions.push(createVersionObj(data[i]));
    }
  }

  if (currentVersion) template.currentVersion = currentVersion
  if (client) template.client = client
  return template;
}
